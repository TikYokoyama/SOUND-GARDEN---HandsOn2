const getEventId = () => {
    const params = new URLSearchParams(window.location.search);  //busca por parametro (id)
    return params.get("id");
}