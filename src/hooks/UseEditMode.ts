import React from 'react';

export const useEditMode = () => {
    const [editMode, setEditMode] = React.useState(false);

    React.useEffect(() => {
        const urlSearchParam = new URLSearchParams(window.location.search);
        const editModeParam = urlSearchParam.get('editmode');

        if (editModeParam === 'true') setEditMode(true);
    }, []);

    return editMode;
}