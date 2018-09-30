// @flow
import * as React from 'react'
import DetailView from '../../screens/DetailView'
import { connect } from 'react-redux'
import { fetchPictureDetails, onPictureLoaded } from './actions'

export interface Props {
  navigation: any,
  fetchPictureDetails: Function,
  onPictureLoaded: Function,
  picture: any,
  isLoading: boolean,
  hiResImage: Function,
}
export interface State {
  imageUrl: string,
}

class DetailViewContainer extends React.Component<Props, State> {
  static navigationOptions = {
    headerStyle: {
      backgroundColor: 'transparent',
      position: 'absolute',
      height: 50,
      top: 0,
      left: 0,
      right: 0,
      borderBottomWidth: 0,
    },
    headerTintColor: '#FFF',
  }

  componentDidMount() {
    const { navigation, fetchPictureDetails } = this.props
    const { pictureDetails } = navigation.state.params
    fetchPictureDetails(pictureDetails.id)
  }

  share = (imageId: string): void => {
    // TODO: implement share function
  }

  applyFilter = (type): void => {
    // TODO: implement apply image filter function
  }

  imageLoaded = (type): void => {
    this.props.onPictureLoaded();
  }

  render() {
    const { pictureDetails } = this.props.navigation.state.params
    const { isLoading } = this.props
    return <DetailView
      pictureDetails={pictureDetails}
      shareCallback={this.share}
      isLoading={isLoading}
      applyFilterCallback={this.applyFilter}
      imageLoadedCallback={this.imageLoaded}
    />
  }
}

function bindAction(dispatch) {
  return {
    fetchPictureDetails: imageId => dispatch(fetchPictureDetails(imageId)),
    onPictureLoaded: () => dispatch(onPictureLoaded()),
  }
}

const mapStateToProps = state => ({
  isLoading: state.detailViewReducer.isLoading,
})

export default connect(mapStateToProps, bindAction)(DetailViewContainer)
