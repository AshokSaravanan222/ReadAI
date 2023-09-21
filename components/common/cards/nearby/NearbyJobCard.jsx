import { View, Text, TouchableOpacity, Image } from "react-native";

import styles from "./nearbyjobcard.style";
import { checkImageURL } from "../../../../utils";
import CircularProgressBar from "../../../progressbar/CircularProgressBar";

const NearbyJobCard = ({ book, handleNavigate }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={handleNavigate}>
      <TouchableOpacity style={styles.logoContainer}>
      <Image
        source={
          checkImageURL(book.thumbnail)
          ? { uri: book.thumbnail }
          : require('../../../../assets/images/logo.png')
          }
        resizeMode='contain'
        style={styles.logImage}
      />
      </TouchableOpacity>

      <View style={styles.textContainer}>
        <Text style={styles.jobName} numberOfLines={2}>
          {book.title}
        </Text>
      </View>
      <Text>{Math.ceil(book.score[0])}</Text>
      {/* <CircularProgressBar 
        percentage={Math.ceil(book.score[0])}
      /> */}
    </TouchableOpacity>
  );
};

export default NearbyJobCard;
