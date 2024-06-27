import { Animated, Easing, Pressable, View } from 'react-native';
import React, { memo, useCallback, useEffect, useRef } from 'react';
import { PageID, ComponentID, ElementID } from '../../../enum';
import { useAmityComponent } from '../../../hook';
import { useStyles } from './styles';
import ImageKeyElement from '../../Elements/ImageKeyElement/ImageKeyElement';
import TextKeyElement from '../../Elements/TextKeyElement/TextKeyElement';

const AmityDetailedMediaAttachmentComponent = () => {
  const pageId = PageID.post_composer_page;
  const componentId = ComponentID.detailed_media_attachment;
  const { accessibilityId, themeStyles, isExcluded } = useAmityComponent({
    pageId,
    componentId,
  });
  const styles = useStyles(themeStyles);

  const animatedBottom = useRef(new Animated.Value(-200)).current;

  const showMediaAttachments = useCallback(() => {
    Animated.timing(animatedBottom, {
      toValue: 14,
      duration: 300,
      easing: Easing.ease,
      useNativeDriver: false,
    }).start();
  }, [animatedBottom]);

  const hideMediaAttachments = useCallback(() => {
    Animated.timing(animatedBottom, {
      toValue: -200,
      duration: 300,
      easing: Easing.ease,
      useNativeDriver: false,
    }).start();
  }, [animatedBottom]);

  useEffect(() => {
    showMediaAttachments();
    return () => hideMediaAttachments();
  }, [hideMediaAttachments, showMediaAttachments]);

  if (isExcluded) return null;
  return (
    <Animated.View
      testID={accessibilityId}
      accessibilityLabel={accessibilityId}
      style={[styles.container, { bottom: animatedBottom }]}
    >
      <View style={styles.handleBar} />
      <View style={styles.buttonsContainer}>
        <Pressable style={styles.mediaAttachmentBtn}>
          <ImageKeyElement
            pageID={pageId}
            componentID={componentId}
            elementID={ElementID.camera_button}
            style={styles.iconBtn}
          />
          <TextKeyElement
            pageID={pageId}
            componentID={componentId}
            elementID={ElementID.camera_button}
            style={styles.iconText}
          />
        </Pressable>
        <Pressable style={styles.mediaAttachmentBtn}>
          <ImageKeyElement
            pageID={pageId}
            componentID={componentId}
            elementID={ElementID.image_button}
            style={styles.iconBtn}
          />
          <TextKeyElement
            pageID={pageId}
            componentID={componentId}
            elementID={ElementID.image_button}
            style={styles.iconText}
          />
        </Pressable>
        <Pressable style={styles.mediaAttachmentBtn}>
          <ImageKeyElement
            pageID={pageId}
            componentID={componentId}
            elementID={ElementID.video_button}
            style={styles.iconBtn}
          />
          <TextKeyElement
            pageID={pageId}
            componentID={componentId}
            elementID={ElementID.video_button}
            style={styles.iconText}
          />
        </Pressable>
        {/* will use later
        <Pressable style={styles.mediaAttachmentBtn}>
          <ImageKeyElement
            pageID={pageId}
            componentID={componentId}
            elementID={ElementID.file_button}
            style={styles.iconBtn}
          />
          <TextKeyElement
            pageID={pageId}
            componentID={componentId}
            elementID={ElementID.file_button}
            style={styles.iconText}
          />
        </Pressable> */}
      </View>
    </Animated.View>
  );
};

export default memo(AmityDetailedMediaAttachmentComponent);
