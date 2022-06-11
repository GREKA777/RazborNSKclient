let initialState = {
    listOrder: [
        {
            id: 1,
            data: "03.05.2022",
            num: "28Y38221",
            status: "В пути"
        },
        {
            id: 2,
            data: "02.05.2022",
            num: "48Y31121",
            status: "Ожидает"
        },
        {
            id: 3,
            data: "01.05.2022",
            num: "38G38221",
            status: "Получено"
        }
    ]}
const orderReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state
    }
}
export default orderReducer