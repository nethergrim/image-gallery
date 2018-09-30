import { Dimensions, StyleSheet } from 'react-native'
const { width } = Dimensions.get('window')

const styles: any = StyleSheet.create({
  container: {
    backgroundColor: '#000',
    flex: 1,
  },
  imageContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
    marginRight: 20,
    fontSize: 18,
  },
  textContainer: {
    flex: 1,
    marginLeft: 18,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  imageStyle: {
    flex: 1,
    width: width * 0.9,
    height: width * 0.9,
  },
  backButton: {
    position: 'absolute',
    left: 5,
    top: 5,
  },
  spinner: {
    position: 'absolute',
  },
  detailView: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between',
  },
  detailViewImage: {
    width: 50,
    height: 50,
  },
})
export default styles
