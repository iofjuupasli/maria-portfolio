#!/bin/bash

# Check if a directory path is provided
if [ -z "$1" ]; then
  echo "Usage: $0 /path/to/directory"
  exit 1
fi

# Assign the provided directory path to a variable
input_dir="$1"

# Check if the provided path is a valid directory
if [ ! -d "$input_dir" ]; then
  echo "Error: '$input_dir' is not a valid directory."
  exit 1
fi

# Create output directories for 1x and 2x images
output_dir="$input_dir"

# Process each PNG file in the input directory
for file in "$input_dir"/*.png; do
  # Check if the file exists
  if [ -f "$file" ]; then
    # Get the base name of the file (without path)
    base_name=$(basename "$file" .png)

    # Skip processing if output files already exist
    if [ -f "$output_dir/${base_name}.webp" ] && [ -f "$output_dir/${base_name}2x.webp" ]; then
      echo "Skipping already processed file: $file"
      continue
    fi

    # Get original width
    original_width=$(identify -format "%w" "$file")
    half_width=$((original_width / 2))

    # Convert and resize to 50% (1x)
    cwebp -q 80 -alpha_q 75 -resize "$half_width" 0 "$file" -o "$output_dir/${base_name}.webp"

    # Convert without resizing (100% or 2x)
    cwebp -q 80 -alpha_q 75 "$file" -o "$output_dir/${base_name}2x.webp"
  fi
done

echo "Batch processing completed. Converted images are saved in '$output_dir'"
