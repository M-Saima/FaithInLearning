import os
import json

def scan_directory(base_path):
    result = {}

    for root, dirs, files in os.walk(base_path):
        # Get relative folder name with respect to base_path
        rel_path = os.path.relpath(root, base_path)
        folder_name = os.path.basename(root)

        if folder_name == ".":
            folder_name = os.path.basename(base_path)

        # Skip if no files in this folder
        if not files:
            continue

        # Add entries for this folder
        file_entries = []
        for file in files:
            full_path = os.path.join(root, file)
            virtual_path = os.path.join('/',rel_path, file).replace("\\", "/")
            file_entries.append({"name": file, "path": virtual_path})

        result[folder_name] = file_entries

    return result

base_directory = "./"  
output = scan_directory(base_directory)
output_file = "output.txt"
with open(output_file, "w", encoding="utf-8") as f:
    f.write(json.dumps(output, indent=4))

print(f"Results saved to {output_file}")
