# Flutter Const Optimizer

## 🚀 Why Use Flutter Const Optimizer?

Flutter/Dart developers, rejoice! If you've ever felt like your Dart code could use a sprinkle of performance magic, this extension is for you. It automatically adds the `const` keyword to constructors and static methods where it’s missing.

### Benefits:
- **Performance**: `const` objects are compile-time constants, which means they’re optimized at build time. Your app will thank you for the speed boost.
- **Cleaner Code**: Fewer manual changes mean a cleaner codebase and less chance of missing crucial optimizations.
- **Less Stress**: No more worrying about those irritatating warnings — we’ve got you covered!

## 🛠️ Features

- **Automatic Optimization**: Adds `const` where applicable based on diagnostics.
- **Manual Trigger**: Use the command palette to manually optimize your Dart code.
- **On Save**: Automatically optimize Dart files upon saving.

## 🚀 How to Use

### 1. **Install the Extension**

1. **Open VS Code**.
2. **Go to Extensions** (`Ctrl+Shift+X` on Windows or `Cmd+Shift+X` on Mac).
3. **Search for `Flutter Const Optimizer`**.
4. **Click Install**.

### 2. **Optimize Your Code**

#### **Manual Optimization**

1. **Open the Command Palette** (`Ctrl+Shift+P` on Windows or `Cmd+Shift+P` on Mac).
2. **Type `Flutter Const Optimizer: Optimize Code`**.
3. **Press Enter**.
4. **Voila!** Your code will be optimized.

#### **Automatic Optimization on Save**

1. Simply **save your Dart file**.
2. The extension will automatically check for optimization opportunities and apply them.

### 3. **Verify the Changes**

The extension will show a notification for each optimization applied. If you have any issues or need to review changes, you’ll see relevant messages in the info panel.

## 🧩 How It Works

1. **Diagnostics Check**: The extension scans for Dart diagnostics suggesting `const` optimizations.
2. **Text Analysis**: It evaluates where `const` can be added.
3. **Code Update**: Applies the `const` keyword and saves your file automatically.

## 🎨 Example

Before:
```
class MyClass {
  MyClass();
}

void myMethod() {
  MyClass();
}
```


After:
```
class MyClass {
  const MyClass();
}

void myMethod() {
  const MyClass();
}
```

## 💬 Feedback & Support

- **Issues**: If you find any issues, please [create a GitHub issue](https://github.com/Prachi-Jamdade/flutter-const-optimizer-vsext/issues).
- **Suggestions**: I’d love to hear your feedback and suggestions to improve the extension!

## 🤖 Contributing

Feel free to contribute to this project. Check out the [contributing guidelines](https://github.com/Prachi-Jamdade/flutter-const-optimizer-vsext/blob/main/CONTRIBUTING.md) and get started!

## 🕵️‍♂️ Fun Fact

Did you know? Adding `const` can make your code faster and more memory-efficient. It’s like giving your Dart code a power-up!
