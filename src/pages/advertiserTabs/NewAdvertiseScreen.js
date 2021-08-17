import React, { useState, useCallback } from 'react'
import { Button, Image, TouchableOpacity } from 'react-native'

import DraggableFlatList from 'react-native-draggable-flatlist'
import ImagePicker from 'react-native-image-crop-picker'

// Components
import Container from '../../components/Container'

// Hooks
import usePhotoPermission from '../../hooks/usePhotoPermission'

const NewAdvertiseScreen = () => {
    // States
    const [imageList, setImageList] = useState([])
    // Hooks
    const [checkPermission] = usePhotoPermission()

    const handlePress = () => {
        checkPermission(runImagePicker)
    }

    const runImagePicker = () => {
        ImagePicker.openPicker({
            width: 300,
            height: 300,
            cropping: false,
            multiple: true,
            mediaType: "photo"
        }).then(images => {
            setImageList(images)
        }).catch(err => {
            console.log(err)
        })
    }

    const renderItem = useCallback(
        ({ item, index, drag, isActive }) => {
            return (
                <TouchableOpacity
                    style={{
                        height: 100,
                        opacity: isActive ? .3 : 1,
                        borderWidth: 2,
                        marginBottom: 20
                    }}
                    onLongPress={drag}
                >
                    <Image source={{ uri: item.path }} style={{ flex: 1, height: 100 }} />
                </TouchableOpacity>
            )
        },
        []
    )

    return (
        <Container backgroundColor="#ddd">
            <Button title="RESIM SEC" onPress={handlePress} />

            {imageList.length > 0 && <DraggableFlatList
                data={imageList}
                renderItem={renderItem}
                onDragEnd={({ data }) => setImageList(data)}
                keyExtractor={(item) => `draggable-item-${item.path}`}
            />}
        </Container>
    )
}

export default NewAdvertiseScreen
