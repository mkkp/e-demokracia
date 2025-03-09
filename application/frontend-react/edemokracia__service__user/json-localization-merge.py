import argparse
import json

def merge_translations(source_json_path, target_json_path):
    with open(source_json_path, 'r', encoding='utf-8') as source_file:
        source_data = json.load(source_file)

    with open(target_json_path, 'r', encoding='utf-8') as target_file:
        target_data = json.load(target_file)

    source_translations = source_data.get('translation', {})
    target_translations = target_data.get('translation', {})

    to_remove = [];
    for key, value in target_translations.items():
        if key not in source_translations:
            print("Recommend to remove: " + key)
            to_remove.append(key)

#    for key in to_remove:
#    		del target_translations[key]


    for key, value in source_translations.items():
        if key not in target_translations:
            target_translations[key] = value


    target_data['translation'] = target_translations

    with open(target_json_path, 'w', encoding='utf-8') as target_file:
        json.dump(target_data, target_file, ensure_ascii=False, indent=4)

def main():
    parser = argparse.ArgumentParser(description="Merge translations from SourceJson to TargetJson")
    parser.add_argument("SourceJson", help="Path to the source JSON file")
    parser.add_argument("TargetJson", help="Path to the target JSON file")
    args = parser.parse_args()

    merge_translations(args.SourceJson, args.TargetJson)
    print("Translations merged successfully.")

if __name__ == "__main__":
    main()
