// @flow
import * as React from 'react'
import {
  View,
  Image,
  ActivityIndicator,
  Dimensions
} from 'react-native'

import styles from './styles'
import DetailsFooter from './components/DetailsFooter'
import ImageZoom from 'react-native-image-pan-zoom';

type Props = {

  isLoading: boolean,
  imageLoadedCallback: Function,
  shareCallback: Function,
  applyFilterCallback: Function,
  pictureDetails: Object,
}

class DetailView extends React.PureComponent<Props> {

  _renderImageOrLoader() {
    const { pictureDetails } = this.props;
    if (this.props.isLoading) {
      return (<View>
        <Image
          style={{ width: 1, height: 1 }}
          source={{ uri: pictureDetails.urls.full }}
          onLoadEnd={this.onImageLoaded.bind(this)}
        />
        <ActivityIndicator />
      </View>);
    }
    return this._renderImage();
  }

  _renderImage() {
    const { pictureDetails } = this.props;
    const window = Dimensions.get('window');
    const height = window.width / (pictureDetails.width / pictureDetails.height)
    return (
      <ImageZoom
        cropWidth={window.width}
        cropHeight={window.height}
        imageWidth={window.width}
        imageHeight={height}
      >
        <Image
          style={{ width: window.width, height: height }}
          source={{ uri: pictureDetails.urls.full }}
          onLoadEnd={this.onImageLoaded.bind(this)}
          loadingIndicatorSource={{ uri: pictureDetails.urls.small }}
        />
      </ImageZoom>
    );
  }

  onImageLoaded() {
    this.props.imageLoadedCallback();
  }

  render() {
    const { shareCallback, applyFilterCallback, pictureDetails } = this.props
    return (
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          {this._renderImageOrLoader()}
        </View>
        <DetailsFooter
          pictureDetails={pictureDetails}
          shareCallback={shareCallback}
          applyFilterCallback={applyFilterCallback} />
      </View>
    )
  }
}

export default DetailView
