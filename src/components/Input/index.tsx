/* eslint-disable quotes */
/* eslint-disable jsx-quotes */
/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {forwardRef, useCallback, useContext, useImperativeHandle, useMemo, useRef, useState} from 'react';
import {ThemeContext} from 'styled-components/native';
import {InputProps, InputValueRef} from './types';

import {Container, InputInternal, Border, Error, Label, IconContainer} from './styles';
import { TouchableOpacity } from 'react-native';
import Icon from '../Icon';

const Input: React.ForwardRefRenderFunction<InputValueRef, InputProps> = ({
  color = 'surface500',
  secureTextEntry,
  icon,
  iconColor,
  iconPosition = 'right',
  label,
  error,
  onChangeText,
  ...rest}, ref) => {
  /* States */
  const {colors} = useContext(ThemeContext);

  const [text, setText] = useState('fasdfasd');

  const [passwordVisible, setPasswordVisible] = useState(false);

  /* Refs */
  const internalRef = useRef<any>();

  /* useImperativeRandle */

  useImperativeHandle(ref, () => ({
    value: text,
    focus: () => internalRef.current?.focus?.(),
    blur: () => internalRef.current?.blur?.(),
    setValue: (value: string) => setText(value),
  }), [text]);

  /* Memos */
  const selectedColorForActiveColorIcon = useMemo(() => {
    if (error) {
      return colors.error.main;
    }
    if (iconColor) {
      return colors[iconColor].main;
    }
    return colors[color].main;
  }, [error, colors, iconColor, color]);

  const renderIcon = useCallback(() => {
    if (secureTextEntry) {
      return (
        <TouchableOpacity onPress={() => setPasswordVisible(old => !old)}>
          <IconContainer iconPosition={iconPosition}>
            <Icon
              icon={passwordVisible ? "openEye" : "closedEye"}
              activeColor={selectedColorForActiveColorIcon} size={30}
            />
          </IconContainer>
        </TouchableOpacity>
      );
    }
    if (icon) {
      return (
        <IconContainer iconPosition={iconPosition}>
          <Icon
            icon={icon}
            activeColor={selectedColorForActiveColorIcon} size={30}
          />
        </IconContainer>
      );
    }
    return null;
  }, [
      secureTextEntry,
      icon,
      iconPosition,
      passwordVisible,
      selectedColorForActiveColorIcon
    ]);

  return (
    <Container>
      {!!label && (
        <Label color='surface600' typography='body3'>{label}</Label>
      )}
      <Border
        color = 'transparent'
        borderColor={error ? colors.error.main : colors[color].main} >
          {iconPosition === 'left' && renderIcon()}
        <InputInternal
          ref={internalRef}
          value={text}
          onChangeText={value => {
            setText(value);
            onChangeText?.(value);
          }}
          secureTextEntry={secureTextEntry && !passwordVisible}
          {...rest}
        />
        {iconPosition === 'right' && renderIcon()}
      </Border>
      {!!error && (
        <Error color="error" typography="body1">
          {error}
        </Error>
      )}
    </Container>
  );
};

export default forwardRef(Input);
