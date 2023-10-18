# RN Keyboard Controller + Dev Client bug

This repo highlights a bug that happens with Android when using the React Native Keyboard Controller and Expo Dev Client.

To reproduce the bug, follow these steps:

1. Ensure `app.json` has `androidNavigationBar.visible` set to `leanback`.
2. Trigger a new development build: `eas build --profile development --platform android`.
   2.1. You'll need to have the EAS CLI installed and be logged in. It'll ask you to create a new project.
3. Install the app on a physical device and open the "Aware scroll view sticky footer" example.
4. Open/Close the input a few times, and notice how the footer position is not updated correctly.

## Detailed explanation

The bug occurs when using the `androidNavigationBar` property:

<details>
	<summary>with `visible: "leanback"`</summary>
	https://github.com/MarceloPrado/react-native-keyboard-controller-dev-client-repro/assets/8047841/d6042c64-c26c-49c6-bc74-22ebf4a9aa03
</details>


<details>
	<summary>with `visible: "immersive"`</summary>


https://github.com/MarceloPrado/react-native-keyboard-controller-dev-client-repro/assets/8047841/bbcd75bb-d957-4940-8112-8cb80e336ebe


</details>

<details>
	<summary>with `visible: "sticky-immersive"`</summary>



https://github.com/MarceloPrado/react-native-keyboard-controller-dev-client-repro/assets/8047841/0eb233b6-cf6f-46f3-bbfb-bcc4c7bf9a33





</details>

<details>
	<summary>with no changes to `visible` (no bug!) </summary>
In this demo, I deleted this section of app.json:

```json
 "androidNavigationBar": {
   "visible": "sticky-immersive"
 },
```
	
[https://github.com/MarceloPrado/react-native-keyboard-controller-dev-client-repro/assets/8047841/bbcd75bb-d957-4940-8112-8cb80e336ebe](https://github.com/MarceloPrado/react-native-keyboard-controller-dev-client-repro/assets/8047841/1c0d4f97-750a-4b61-aa23-86f7187216f9)https://github.com/MarceloPrado/react-native-keyboard-controller-dev-client-repro/assets/8047841/1c0d4f97-750a-4b61-aa23-86f7187216f9


</details>



