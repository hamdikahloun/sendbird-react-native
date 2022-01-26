import React, {useState, memo} from 'react';
import {
  GestureResponderEvent,
  Image,
  ImageErrorEventData,
  ImageStyle,
  NativeSyntheticEvent,
  StyleProp,
  StyleSheet,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';

export type AvatarProps = {
  size?: number;
  containerStyle?: StyleProp<ViewStyle>;
  image?: string;
  imageStyle?: StyleProp<ImageStyle>;
  online?: boolean;
  presenceIndicatorContainerStyle?: StyleProp<ViewStyle>;
  onPress?: (event: GestureResponderEvent) => void;
};

const defaultImage =
  'https://avatars.githubusercontent.com/u/5143408?s=200&v=4';

const AvatarMemorized: React.FC<AvatarProps> = props => {
  const {
    containerStyle,
    image,
    imageStyle,
    online,
    presenceIndicatorContainerStyle,
    size = 48,
    onPress,
  } = props;

  const [imageError, setImageError] = useState(false);
  const imageSource = imageError || !image ? defaultImage : image;

  const onError = (error: NativeSyntheticEvent<ImageErrorEventData>) => {
    setImageError(true);
    console.log('Avatar', 'onError', error.nativeEvent.error);
  };

  return (
    <TouchableOpacity disabled={!onPress} onPress={onPress}>
      <View
        style={[
          styles.container,
          {
            borderRadius: size / 2,
            height: size,
            width: size,
          },
          containerStyle,
        ]}>
        <Image
          onError={onError}
          source={{uri: imageSource}}
          style={[
            {
              borderRadius: size / 2,
              height: size,
              width: size,
            },
            imageStyle,
          ]}
          testID={'user-avatar'}
        />
      </View>
      {online && (
        <View
          testID="online-view"
          style={[
            styles.presenceIndicatorContainer,
            presenceIndicatorContainerStyle,
          ]}
        />
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  presenceIndicatorContainer: {
    height: 12,
    position: 'absolute',
    right: 0,
    top: 0,
    width: 12,
    backgroundColor: 'green',
    borderRadius: 6,
  },
});

/**
 * Avatar - A round avatar image
 *
 * @example
 *
 * <Avatar image="https://example.com/image.png" size={64} />
 */
export const Avatar = memo(AvatarMemorized);
