# RN Keyboard Controller + Dev Client bug

This repo highlights a bug that happens with Android when using the React Native Keyboard Controller and Expo Dev Client.

To reproduce the bug, follow these steps:

1. Ensure `app.json` has `androidNavigationBar.visible` set to `leanback`.
2. Trigger a new development build: `eas build --profile development --platform android`.
   2.1. You'll need to have the EAS CLI installed and be logged in. It'll ask you to create a new project.
3. Install the app on a physical device and open the "Aware scroll view sticky footer" example.
4. Open/Close the input a few times, and notice how the footer position is not updated correctly.

## Detailed explanation

The bug seems to be happenign due to the `androidNavigationBar` property:

<details>
	<summary>with `visible: "leanback"`</summary>

    []

</details>
