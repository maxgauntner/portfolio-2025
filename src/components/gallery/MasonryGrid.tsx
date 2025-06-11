"use client";

import Masonry from "react-masonry-css";
import { Flex, LetterFx, SmartImage, Fade } from "@/once-ui/components";
import styles from "./Gallery.module.scss";
import { gallery } from "@/app/resources/content";
import { useState } from 'react';

export default function MasonryGrid() {
  const breakpointColumnsObj = {
      default: 2,
      1440: 2,
      1024: 2,
      560: 1
  };

  return (
      <Masonry
          breakpointCols={breakpointColumnsObj}
          className={styles.masonryGrid}
          columnClassName={styles.masonryGridColumn}>
          {gallery.images.map((image, index) => {
              const [triggerLocation, setTriggerLocation] = useState<() => void>(() => () => {});
              const [triggerTechnical, setTriggerTechnical] = useState<() => void>(() => () => {});

              return (
                  <Flex className={styles.trigger}
                      position="relative"
                      key={index}
                      onMouseOver={() => {
                          triggerLocation();
                          triggerTechnical();
                      }}>
                      <SmartImage
                          radius="s"
                          sizes="(max-width: 560px) 100vw, (max-width: 1024px) 50vw, (max-width: 1440px) 33vw, 25vw"
                          aspectRatio={image.orientation === "horizontal" ? "16 / 9" : "2 / 3"}
                          src={image.src}
                          alt={image.alt}
                          className={styles.gridItem}
                          />
                      <Flex className={styles.details}
                          position="absolute" fillWidth fillHeight zIndex={0}
                          direction="column" vertical="end" horizontal="center" gap="8"
                          textVariant="label-default-m" paddingBottom="32" paddingX="24">
                          <LetterFx
                              trigger="custom"
                              onTrigger={(handler) => setTriggerLocation(() => handler)}
                              speed="medium">
                              {image.location}
                          </LetterFx>
                          <LetterFx
                              trigger="custom"
                              onTrigger={(handler) => setTriggerTechnical(() => handler)}
                              speed="medium">
                              {image.technical}
                          </LetterFx>
                          <Fade
                            fillWidth
                            position="absolute"
                            bottom="0"
                            to="top"
                            marginBottom="16"
                            bottomRadius="s"
                            height={4}
                            pattern={{ display: false, size: "2" }}
                            />
                      </Flex>
                  </Flex>
              )
          })}
      </Masonry>
  );
}
