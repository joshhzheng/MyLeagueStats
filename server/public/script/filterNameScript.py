import os
import json

# Path to the directory containing JSON files
json_folder = "./champion"

# Loop through each JSON file in the directory
for filename in os.listdir(json_folder):
    if filename.endswith(".json"):
        file_path = os.path.join(json_folder, filename)
        with open(file_path, "r") as file:
            # Load JSON data
            json_data = json.load(file)

        # Check if the top-level structure is a dictionary and has a single key
        if isinstance(json_data, dict) and len(json_data) == 1:
            # Extract the single key and its value
            key, value = next(iter(json_data.items()))

            # Modify the file to only contain the value
            with open(file_path, "w") as file:
                json.dump(value, file, indent=2)