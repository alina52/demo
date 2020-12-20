import * as Constants from 'src/core/constants'

export const initTabValue = tabValue => {
    return { type : Constants.HEADER_INIT_TABVALUE, tabValue: tabValue}
};

export const updateTabValue = updateTabValue => {
    return {
        type: Constants.HEADER_UPDATE_TABVALUE,
        tabValue: updateTabValue
    };
};

export const clearHeaderTabPageData = () => {
    return { type: Constants.HEADER_CLEAR_TABVALUE
    }
}