import * as React from 'react';
import Button from '../../Button';
import { View,Text } from 'react-native';
import styles from './styles';
import Modal from "react-native-modal";
import { useNavigation } from '@react-navigation/native';

const MainModal = (props) => {

 const navigation = useNavigation();

  const {visible, hideModal, onPress, text, style,modalText,button} = props;


  return (
<View>
  {button  &&
  <Button customStyle={style} text={text} onPress={onPress} />
  }
  <Modal 
  style={styles.modal}
  swipeDirection={['up', 'down']}
  animationIn={'slideInUp'}
  animationOut={'slideOutDown'}
  backdropOpacity={0.5}
  propagateSwipe={true}
  onSwipeComplete={hideModal}
  onBackdropPress={hideModal}
  onBackButtonPress={hideModal}
  isVisible={visible} 
  onDismiss={hideModal}>
    <View style={styles.modalContainer}>
      <View style={styles.line}/>
      <Text style={styles.modalText}>{modalText}</Text>
      <View>
        <Button
         onPress={()=>{
          navigation.navigate('MembershipsAttribute',{type:'GoldPremium', headerTitle:'Gold Üyelik'})
          hideModal()
         }}
        text="Gold Üyelik" customStyle={styles.button}/>
      </View>
      
    </View>
  </Modal>
</View>
  );
};

export default MainModal;