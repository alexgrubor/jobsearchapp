import { View, ScrollView, SafeAreaView } from "react-native";
import { useState } from "react";
import { Stack, useRouter } from "expo-router";

import { COLORS, icons, images, SIZES, FONT } from "../constants";
import {
  Nearbyjobs,
  Popularjobs,
  ScreenHeaderBtn,
  Welcome,
} from "../components";

const Home = () => {
  const router = useRouter();
  const [search, setSearch] = useState('')
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLORS.lightWhite,
      }}
    >
      <Stack.Screen
        options={{
          headerStyle: {
            backgroundColor: COLORS.lightWhite,
          },
          headerShadowVisible: false,
          headerLeft: () => {
            return <ScreenHeaderBtn iconUrl={icons.menu} dimension="60%" />;
          },
            headerRight: () => {
            return <ScreenHeaderBtn iconUrl={images.profile} dimension="100%" />;
            },
            title: "",
        }}
      />
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={{
                flex: 1,
                padding: SIZES.medium
            }}>
                <Welcome
                 search={search}
                  setSearch={setSearch}
                  handleClick = {()=> {
                    if(search){
                      router.push(`/search/${search}`)
                    }
                  }}
                />
                <Popularjobs />
                <Nearbyjobs/>
            </View>
            
        </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
