import { ReactNode } from 'react';
import { View, StyleSheet } from 'react-native';
import { NavPanel, NavButton } from '../navigation';

type Props = {
  children: ReactNode,
  navigation: any,
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export const Screen = (props: Props): JSX.Element => (
  <>
    <NavPanel>
      <NavButton title='Home' navigation={props.navigation} />
      <NavButton title='Athletes' navigation={props.navigation}/>
      <NavButton title='References' navigation={props.navigation}/>
      <NavButton title='About' navigation={props.navigation}/>
    </NavPanel>
    <View style={styles.content}>
      { props.children }
    </View>
  </>
);
