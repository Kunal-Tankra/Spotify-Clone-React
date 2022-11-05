export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    // remove token after finished developing...
    // token: 'BQDBwD0puwhPbGfb0UWWorfTkFgm1xvCxBhBHv4n89uAJ1Dmm1xJDLyRwcIYVyI0SjgDbmh5U3GUUCBBWrup4wsP1Jq4V-F1l334riGE2_CXJjse5SrXkuYBV-fugRZEGuWW8scVvFceBJmO4qyrf24nkw2OkGOn0mCmmeAzrXqSWaRrA7XaFubeyYY6snTc9V48UMqfrtWuSBXJ6H9C'
    
    

};

const reducer = (state, action) => {

    // action --> type, [payload]

    switch (action.type) {
        case 'SET_USER':
            return { ...state, user: action.user }

        case 'SET_TOKEN':
            return { ...state, token: action.token }

        case 'SET_PLAYLISTS':
            return {...state, playlists: action.playlists}

        case 'SET_DISCOVER_WEEKLY':
            return {...state, discover_weekly: action.discover_weekly}

        default:
            return state;
    }

}

export default reducer;