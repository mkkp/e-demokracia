#!/bin/bash

# exit immediately if commands fail
set -e

cd $( dirname "$0" )
readonly CURR_DIR=$( pwd -P )

# readonly GENERATOR_IGNORE="$CURR_DIR/.generator-ignore"

readonly APP_LOCALIZATION_DEFAULT_PATH="$CURR_DIR/public/i18n/application_default.json"
readonly APP_LOCALIZATION_DEFAULT_PATH_TEMP="/tmp/application_default.json_temp"
readonly SYS_LOCALIZATION_DEFAULT_PATH="$CURR_DIR/public/i18n/system_default.json"
readonly SYS_LOCALIZATION_DEFAULT_PATH_TEMP="/tmp/system_default.json_temp"

readonly APP_LOCALIZATION_HU_PATH="$CURR_DIR/public/i18n/application_hu-HU.json"
readonly APP_LOCALIZATION_HU_PATH_TEMP="/tmp/application_hu-HU.json_temp"
readonly SYS_LOCALIZATION_HU_PATH="$CURR_DIR/public/i18n/system_hu-HU.json"
readonly SYS_LOCALIZATION_HU_PATH_TEMP="/tmp/system_hu-HU.json_temp"

echo "Saving current state of public/i18n/application_default.json..."
cat "$APP_LOCALIZATION_DEFAULT_PATH" > "$APP_LOCALIZATION_DEFAULT_PATH_TEMP"

echo "Saving current state of public/i18n/system_default.json..."
cat "$SYS_LOCALIZATION_DEFAULT_PATH" > "$SYS_LOCALIZATION_DEFAULT_PATH_TEMP"

echo "Saving current state of public/i18n/application_hu-HU.json..."
cat "$APP_LOCALIZATION_HU_PATH" > "$APP_LOCALIZATION_HU_PATH_TEMP"

echo "Saving current state of public/i18n/system_hu-HU.json..."
cat "$SYS_LOCALIZATION_HU_PATH" > "$SYS_LOCALIZATION_HU_PATH_TEMP"

#

echo "Applying already translated app values..."
python3 "$CURR_DIR/json-localization-merge.py" "$APP_LOCALIZATION_DEFAULT_PATH_TEMP" "$APP_LOCALIZATION_HU_PATH_TEMP"
cat "$APP_LOCALIZATION_HU_PATH_TEMP" > "$APP_LOCALIZATION_HU_PATH"

echo "Applying already translated sys values..."
python3 "$CURR_DIR/json-localization-merge.py" "$SYS_LOCALIZATION_DEFAULT_PATH_TEMP" "$SYS_LOCALIZATION_HU_PATH_TEMP"
cat "$SYS_LOCALIZATION_HU_PATH_TEMP" > "$SYS_LOCALIZATION_HU_PATH"

