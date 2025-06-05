## fixefor-addon

# Load temporary

Addon will be loaded until exit from Firefox.

1. Open `about:debugging#/runtime/this-firefox`
2. Click `Load Temporary Add-on...`
3. Select file `src/manifest.json`

# Installation (Firefox Developer Edition)

1. Prepare the Addon
   - Create a ZIP file of the `src` folder:
     ```
        zip -r addon.zip src --exclude .git
     ```
2. Enable Unsigned Addons
   - Go to `about:config` → Set `xpinstall.signatures.required` to `false`.

3. Install the Addon
   - Go to `about:addons` → Click the gear icon → Install `.zip` file.

# License

Licensed under the [MIT License](LICENSE).
