declare namespace Schema {
    interface playlist {
        id: number
        name: string
        user_id: number
    }
    interface user {
        id: number
        sn: string
        unionid: string
        nickname: string
        avatar: string
        sourceData: string
        from: string
    }
    interface playlist_song {
        id: number
        song_id: number
        playlist_id: number
    }
    interface song {
        id: number
        songId: string
        vendor: "netease" | "qq" | "xiami"
        commentId: string
        name: string
        album: {
            cover: string
            id: string
            name: string | number
        }
        artists: Array<{
            id: string | number
            name: string
        }>
        cp: boolean
    }
}