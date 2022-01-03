import React from "react";
import { SvgXml } from "react-native-svg";
import { Spacer } from "../../../components/spacer/spacer.component";
import { Text } from "../../../components/typography/text.component";
import star from "../../../../assets/star";
import open from "../../../../assets/open";

import {
  GoodCard,
  GoodCardCover,
  Info,
  Section,
  SectionEnd,
  Rating,
  Icon,
  Address,
} from "./goods-info.card.styles";

export const GoodsInfoCard= ({good= {}}) => {
    const{
    name= 'Snap fitness',
    icon=   "https://thumbs.dreamstime.com/b/dollars-suitcase-business-icon-vector-sign-symbol-isolated-white-background-logo-concept-your-web-mobile-app-design-134169376.jpg",
    photos= 
    [ "data:image/png;base64,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",
    ],
    address = "Prince Edward",
    isOpenNow= true,
    rating= 4,
    isClosedTemporarily=false,
    }= good;

    const ratingArray = Array.from(new Array(Math.floor(rating)));

    return (
        <GoodCard elevation={5}>
        <GoodCardCover key={name} source={{ uri: photos[0] }} />
        <Info>
        <Text variant="label">{name}</Text>
        <Section>
          <Rating>
            {ratingArray.map(() => (
              <SvgXml xml={star} width={20} height={20} />
            ))}
          </Rating>
          <SectionEnd>
            {isClosedTemporarily && (
              <Text variant="error">CLOSED TEMPORARILY</Text>
            )}
            <Spacer position="left" size="large">
              {isOpenNow && <SvgXml xml={open} width={20} height={20} />}
            </Spacer>
            <Spacer position="left" size="large">
              <Icon source={{ uri: icon }} />
            </Spacer>
          </SectionEnd>
        </Section>
        <Address>{address}</Address>
      </Info>
    </GoodCard>
  );
};

