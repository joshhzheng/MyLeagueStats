import os
import json

# Path to the directory containing JSON files
json_folder = "./item"

# Loop through each JSON file in the directory
for filename in os.listdir(json_folder):
    if filename.endswith(".json"):
        file_path = os.path.join(json_folder, filename)
        with open(file_path, "r") as file:
            # Load JSON data
            json_data = json.load(file)

        # Check if the top-level structure is a list
        if isinstance(json_data, list):
            for entry in json_data:
                # Iterate over each key-value pair in the entry
                for key, value in entry.items():
                    # Add a new "id" field at the same level as other fields
                    value["id"] = key

                    # Construct the new file name
                    new_filename = os.path.join(json_folder, f"{key}.json")

                    # Write the modified entry to a new file
                    with open(new_filename, "w") as new_file:
                        json.dump(value, new_file, indent=2)