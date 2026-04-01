#!/usr/bin/env python3
"""
Portfolio Image Optimizer
Converts all portfolio images to WebP format with quality/size optimization.
Run from the root of your React project:
    python3 convert_to_webp.py

Options:
    --quality    WebP quality (1-100, default: 82)
    --max-width  Max width in px — larger images are resized down (default: 1200)
    --dry-run    Preview what would happen without writing files
    --delete     Delete original files after conversion
"""

import argparse
import os
import sys
from pathlib import Path

try:
    from PIL import Image
except ImportError:
    print("Pillow is required. Install it with:  pip install Pillow")
    sys.exit(1)


SUPPORTED_EXTENSIONS = {".jpg", ".jpeg",
                        ".png", ".gif", ".bmp", ".tiff", ".webp"}


def human_size(num_bytes: int) -> str:
    for unit in ("B", "KB", "MB"):
        if abs(num_bytes) < 1024:
            return f"{num_bytes:.1f} {unit}"
        num_bytes /= 1024
    return f"{num_bytes:.1f} GB"


def convert_image(
    src: Path,
    quality: int,
    max_width: int,
    dry_run: bool,
    delete_original: bool,
) -> tuple[int, int]:
    """Returns (original_size_bytes, new_size_bytes). new_size=0 on skip/dry-run."""
    dest = src.with_suffix(".webp")

    # Skip if already a webp that has no original beside it
    if src.suffix.lower() == ".webp" and dest == src:
        return 0, 0

    original_size = src.stat().st_size

    if dry_run:
        print(
            f"  [dry-run] {src.name} → {dest.name}  ({human_size(original_size)})")
        return original_size, 0

    with Image.open(src) as img:
        # Convert palette / RGBA for JPEG-originated files
        if img.mode in ("P", "RGBA", "LA"):
            img = img.convert("RGBA")
        elif img.mode != "RGB":
            img = img.convert("RGB")

        # Resize if wider than max_width (maintain aspect ratio)
        if img.width > max_width:
            ratio = max_width / img.width
            new_size = (max_width, int(img.height * ratio))
            img = img.resize(new_size, Image.LANCZOS)

        img.save(dest, "WEBP", quality=quality, method=6)

    new_size = dest.stat().st_size
    saved = original_size - new_size
    pct = (saved / original_size * 100) if original_size else 0

    status = f"✓ {src.name} → {dest.name}"
    status += f"  {human_size(original_size)} → {human_size(new_size)}"
    status += f"  (-{pct:.0f}%)" if saved > 0 else f"  (+{abs(pct):.0f}% larger)"

    print(status)

    if delete_original and src != dest:
        src.unlink()
        print(f"    🗑  deleted {src.name}")

    return original_size, new_size


def main():
    parser = argparse.ArgumentParser(
        description="Convert portfolio images to WebP.")
    parser.add_argument(
        "--dir",
        default="src/assets/images/portfolio",
        help="Path to the portfolio images folder (default: src/assets/images/portfolio)",
    )
    parser.add_argument(
        "--quality", type=int, default=82, help="WebP quality 1-100 (default: 82)"
    )
    parser.add_argument(
        "--max-width",
        type=int,
        default=1200,
        help="Resize images wider than this (default: 1200px)",
    )
    parser.add_argument(
        "--dry-run",
        action="store_true",
        help="Show what would be converted without writing files",
    )
    parser.add_argument(
        "--delete",
        action="store_true",
        help="Delete original files after successful conversion",
    )
    args = parser.parse_args()

    folder = Path(args.dir)
    if not folder.exists():
        print(f"❌ Folder not found: {folder}")
        print("   Run this script from your React project root, or pass --dir <path>")
        sys.exit(1)

    images = [
        f
        for f in sorted(folder.iterdir())
        if f.is_file() and f.suffix.lower() in SUPPORTED_EXTENSIONS
        # Skip files that are already .webp AND don't have a non-webp twin
        and not (f.suffix.lower() == ".webp" and not any(
            folder.joinpath(f.stem + ext).exists()
            for ext in SUPPORTED_EXTENSIONS - {".webp"}
        ))
    ]

    if not images:
        print(f"No supported images found in {folder}")
        sys.exit(0)

    print(f"\n📁 Found {len(images)} image(s) in {folder}")
    print(f"   Quality: {args.quality}  |  Max width: {args.max_width}px")
    print(f"   Delete originals: {args.delete}  |  Dry run: {args.dry_run}\n")

    total_original = total_new = 0
    converted = skipped = 0

    for img_path in images:
        try:
            orig, new = convert_image(
                img_path,
                quality=args.quality,
                max_width=args.max_width,
                dry_run=args.dry_run,
                delete_original=args.delete,
            )
            if orig:
                total_original += orig
                total_new += new
                converted += 1
            else:
                skipped += 1
        except Exception as e:
            print(f"  ⚠ Skipped {img_path.name}: {e}")
            skipped += 1

    print(f"\n{'─'*55}")
    print(f"  Converted : {converted} files")
    print(f"  Skipped   : {skipped} files")
    if not args.dry_run and total_original:
        saved = total_original - total_new
        pct = saved / total_original * 100
        print(f"  Before    : {human_size(total_original)}")
        print(f"  After     : {human_size(total_new)}")
        print(f"  Saved     : {human_size(saved)} ({pct:.1f}%)")
    print()


if __name__ == "__main__":
    main()
