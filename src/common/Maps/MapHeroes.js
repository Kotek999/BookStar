import * as React from "react";
import { StyleSheet } from "react-native";
import { dataCommon } from "../../Books/DataBooks/dataCommon";
import { Stack, Heading, Text, Divider } from "native-base";
import { dataPT } from "../../Books/DataBooks/dataPT";
import { dataDZIII } from "../../Books/DataBooks/dataDZIII";
import { dataLL } from "../../Books/DataBooks/dataLL";
import { dataFD } from "../../Books/DataBooks/dataFD";
import { dataWS } from "../../Books/DataBooks/dataWS";
import {
  grayHeroesDividerColor,
  purpleHeroesTitleColor,
  blackColor,
} from "../Colors/colors";

export default function MapHeroes(props) {
  return (
    <Stack marginTop={4}>
      <Heading fontSize="xl" marginBottom={2}>
        {dataCommon.mainHeroes}
      </Heading>
      {props.isHeroesPT && (
        <>
          {dataPT.map((item, heroesPT) => {
            return (
              <Stack key={heroesPT} marginBottom={0}>
                {item.mainHeroes.map((mainHeroes, mainHeroesPT) => (
                  <Stack key={mainHeroesPT} marginBottom={2}>
                    <Divider
                      my="2"
                      _light={{
                        bg: grayHeroesDividerColor,
                      }}
                      _dark={{
                        bg: grayHeroesDividerColor,
                      }}
                    />
                    <Text marginTop={2} style={styles.heroesTitle}>
                      {mainHeroes.namePT}
                    </Text>
                    <Stack marginTop={4}>
                      <Text style={styles.heroesContent}>
                        {mainHeroes.contentPT}
                      </Text>
                    </Stack>
                  </Stack>
                ))}
              </Stack>
            );
          })}
        </>
      )}
      {props.isHeroesDZIII && (
        <>
          {dataDZIII.map((item, heroesDZIII) => {
            return (
              <Stack key={heroesDZIII} marginBottom={0}>
                {item.mainHeroes.map((mainHeroes, mainHeroesDZIII) => (
                  <Stack key={mainHeroesDZIII} marginBottom={2}>
                    <Divider
                      my="2"
                      _light={{
                        bg: grayHeroesDividerColor,
                      }}
                      _dark={{
                        bg: grayHeroesDividerColor,
                      }}
                    />
                    <Text marginTop={2} style={styles.heroesTitle}>
                      {mainHeroes.nameDZIII}
                    </Text>
                    <Stack marginTop={4}>
                      <Text style={styles.heroesContent}>
                        {mainHeroes.contentDZIII}
                      </Text>
                    </Stack>
                  </Stack>
                ))}
              </Stack>
            );
          })}
        </>
      )}
      {props.isHeroesLL && (
        <>
          {dataLL.map((item, heroesLL) => {
            return (
              <Stack key={heroesLL} marginBottom={0}>
                {item.mainHeroes.map((mainHeroes, mainHeroesLL) => (
                  <Stack key={mainHeroesLL} marginBottom={2}>
                    <Divider
                      my="2"
                      _light={{
                        bg: grayHeroesDividerColor,
                      }}
                      _dark={{
                        bg: grayHeroesDividerColor,
                      }}
                    />
                    <Text marginTop={2} style={styles.heroesTitle}>
                      {mainHeroes.nameLL}
                    </Text>
                    <Stack marginTop={4}>
                      <Text style={styles.heroesContent}>
                        {mainHeroes.contentLL}
                      </Text>
                    </Stack>
                  </Stack>
                ))}
              </Stack>
            );
          })}
        </>
      )}
      {props.isHeroesFD && (
        <>
          {dataFD.map((item, heroesFD) => {
            return (
              <Stack key={heroesFD} marginBottom={0}>
                {item.mainHeroes.map((mainHeroes, mainHeroesFD) => (
                  <Stack key={mainHeroesFD} marginBottom={2}>
                    <Divider
                      my="2"
                      _light={{
                        bg: grayHeroesDividerColor,
                      }}
                      _dark={{
                        bg: grayHeroesDividerColor,
                      }}
                    />
                    <Text marginTop={2} style={styles.heroesTitle}>
                      {mainHeroes.nameFD}
                    </Text>
                    <Stack marginTop={4}>
                      <Text style={styles.heroesContent}>
                        {mainHeroes.contentFD}
                      </Text>
                    </Stack>
                  </Stack>
                ))}
              </Stack>
            );
          })}
        </>
      )}
      {props.isHeroesWS && (
        <>
          {dataWS.map((item, heroesWS) => {
            return (
              <Stack key={heroesWS} marginBottom={0}>
                {item.mainHeroes.map((mainHeroes, mainHeroesWS) => (
                  <Stack key={mainHeroesWS} marginBottom={2}>
                    <Divider
                      my="2"
                      _light={{
                        bg: grayHeroesDividerColor,
                      }}
                      _dark={{
                        bg: grayHeroesDividerColor,
                      }}
                    />
                    <Text marginTop={2} style={styles.heroesTitle}>
                      {mainHeroes.nameWS}
                    </Text>
                    <Stack marginTop={4}>
                      <Text style={styles.heroesContent}>
                        {mainHeroes.contentWS}
                      </Text>
                    </Stack>
                  </Stack>
                ))}
              </Stack>
            );
          })}
        </>
      )}
    </Stack>
  );
}

const styles = StyleSheet.create({
  heroesTitle: {
    fontSize: 14,
    letterSpacing: 0.5,
    fontWeight: "bold",
    color: purpleHeroesTitleColor,
  },
  heroesContent: {
    fontSize: 14,
    letterSpacing: 0.5,
    fontWeight: "500",
    marginRight: 25,
    textAlign: "left",
    color: blackColor,
  },
});
