/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import type { Node } from 'react';
import React from 'react';
import { SafeAreaView, ScrollView, StatusBar, View } from 'react-native';

import CodeEditor, {
  CodeEditorSyntaxStyles,
} from '@rivascva/react-native-code-editor';

const App: () => Node = () => {
  // TODO: Set the status bar styles according to the theme
  // TODO: Set a dark/light theme according to user preferences
  const editorStyles = CodeEditorSyntaxStyles.atomOneDark;

  const backgroundStyle = {
    backgroundColor: editorStyles.hljs.background,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View>
          <CodeEditor
            style={{
              fontSize: 20,
              inputLineHeight: 26,
              highlighterLineHeight: 26,
            }}
            language="javascript"
            syntaxStyle={CodeEditorSyntaxStyles.atomOneDark}
            showLineNumbers
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
