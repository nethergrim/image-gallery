// @flow
import * as React from 'react'
import {
  View,
  Image,
} from 'react-native'

import styles from './styles'
import DetailsFooter from './components/DetailsFooter'

type Props = {
  imageUrl: string,
  isLoading: boolean,
  shareCallback: Function,
  applyFilterCallback: Function,
  pictureDetails: Object,
}

// TODO: it would be great to see here loader, pinch to zoom here and pan

class DetailView extends React.PureComponent<Props> {
  render () {
    const { imageUrl, isLoading, shareCallback, applyFilterCallback, pictureDetails } = this.props
    return (
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            source={{uri: imageUrl}}
            style={styles.imageStyle} />
        </View>
        <DetailsFooter
          pictureDetails={pictureDetails}
          shareCallback={shareCallback}
          applyFilterCallback={applyFilterCallback}
        />
      </View>
    )
  }
}

export default DetailView
