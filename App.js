/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import type { Node } from 'react';
import React, { useState } from 'react';

import { SafeAreaView, ScrollView, StatusBar, View, Text } from 'react-native';

import CodeEditor, {
  CodeEditorSyntaxStyles,
} from '@rivascva/react-native-code-editor';

import TransparentButton from '@wniemiec-component-reactnative/transparent-button';

const App: () => Node = () => {
  // TODO: Set the status bar styles according to the theme
  // TODO: Set a dark/light theme according to user preferences
  const editorStyles = CodeEditorSyntaxStyles.atomOneDark;

  const areaStyle = {
    color: editorStyles.hljs.color,
    backgroundColor: editorStyles.hljs.background,
    flex: 1,
  };

  // The current mode of the editor (can be normal or insert)
  const [mode, setMode] = useState('normal');

  return (
    <SafeAreaView style={areaStyle}>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={areaStyle.backgroundColor}
      />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          padding: 10,
          alignItems: 'center',
        }}>
        <View
          style={{
            flex: 1,
          }}>
          <Text style={{ color: areaStyle.color }}>main.js</Text>
        </View>
        <TransparentButton
          title={mode.toUpperCase()}
          onPress={() => setMode(mode === 'normal' ? 'insert' : 'normal')}
          style={{ backgroundColor: '#00000000' }}
          fgColor={areaStyle.color}
        />
      </View>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View>
          <CodeEditor
            style={{
              fontSize: 18,
              inputLineHeight: 28,
              highlighterLineHeight: 28,
            }}
            readOnly={mode === 'normal'}
            autoFocus={true}
            initialValue={`function sum(a, b) {\n  return a + b;\n}`}
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
