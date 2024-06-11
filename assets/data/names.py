import json

# Read the JSON file
with open('source.json') as file:
    data = json.load(file)

# Create a set to store the unique names
unique_names = set()

# Iterate over the features in the JSON data
for feature in data['features']:
    properties = feature['properties']

    # Add the name to the set
    unique_names.add(properties['name'])

# Convert the set to a list
unique_names = list(unique_names)

# Write the unique names to a new JSON file
with open('names.json', 'w') as output_file:
    json.dump(unique_names, output_file)