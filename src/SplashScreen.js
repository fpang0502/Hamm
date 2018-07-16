componentDidMount () {
  this.props.initializeApp()
}

componentDidUpdate () {
  if (this.props.isAppReady) {
    if (this.props.isLoggedIn) {
      this._navigateTo('MainNavigator')
    } else {
      this._navigateTo('AuthScreen')
    }
  }
}

_navigateTo = (routeName: string) => {
  const actionToDispatch = NavigationActions.reset({
    index: 0,
    actions: [NavigationActions.navigate({ routeName })]
  })
  this.props.navigation.dispatch(actionToDispatch)
}
