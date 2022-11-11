/**
 * @format
 * @flow strict-local
 */

import type { Node } from 'react';
import React, { useState } from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  View,
  Text,
  StyleSheet,
} from 'react-native';

import CodeEditor, {
  CodeEditorSyntaxStyles,
} from '@rivascva/react-native-code-editor';

import Icon from 'react-native-vector-icons/MaterialIcons';
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
          padding: 15,
          paddingBottom: 0,
          paddingTop: 0,
          alignItems: 'center',
        }}>
        <View
          style={{
            flex: 1,
          }}>
          <Text style={{ color: areaStyle.color, fontSize: 18 }}>main.js</Text>
        </View>
        <TransparentButton
          title={<Icon name="search" size={20} color={areaStyle.color} />}
        />
        <TransparentButton
          title={<Icon name="settings" size={18} color={areaStyle.color} />}
        />
        <TransparentButton
          title={mode.toUpperCase()}
          onPress={() => setMode(mode === 'normal' ? 'insert' : 'normal')}
          style={{ backgroundColor: '#00000000' }}
          fgColor={areaStyle.color}
        />
      </View>
      <Divider />
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

const Divider = () => {
  return (
    <View
      style={{
        marginVertical: 8,
        borderBottomColor: '#737373',
        borderBottomWidth: StyleSheet.hairlineWidth,
      }}
    />
  );
};

export default App;
