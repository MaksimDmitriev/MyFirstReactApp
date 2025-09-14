import React from 'react';
import { Pressable, Text, StyleSheet, Platform } from 'react-native';

type PillButtonProps = {
  label: string;
  onPress?: () => void;
  disabled?: boolean;
};

export function PillButton({ label, onPress, disabled }: PillButtonProps) {
  return (
    <Pressable
      disabled={disabled}
      onPress={onPress}
      android_ripple={
        Platform.OS === 'android' ? { borderless: false } : undefined
      }
      style={({ pressed }) => [
        styles.pill,
        disabled ? styles.pillDisabled : styles.pillEnabled,
        pressed && !disabled && styles.pillPressed,
      ]}
    >
      <Text style={[styles.pillText, disabled && styles.pillTextDisabled]}>
        {label}
      </Text>
    </Pressable>
  );
}

const PURPLE = '#6C4AB6';
const GREY_BG = '#E7E6EA';
const GREY_TEXT = '#B0AFB5';

const styles = StyleSheet.create({
  pill: {
    minWidth: 120,
    paddingVertical: 10,
    paddingHorizontal: 18,
    borderRadius: 999,
    alignItems: 'center',
    justifyContent: 'center',
  },
  pillEnabled: { backgroundColor: PURPLE },
  pillPressed: { transform: [{ scale: 0.97 }] },
  pillDisabled: { backgroundColor: GREY_BG },
  pillText: { color: '#fff', fontSize: 14, fontWeight: '600' },
  pillTextDisabled: { color: GREY_TEXT },
});
