var creator: any = {

    project: "init",

    path: "",

    json: {},

    email: {},

    message: "",

    temp: [],

    total_member: 0,

    firebase: {
        user: "",
        confirmation: "",
        recaptcha_verifier: "",
        phone_verified: false,
        email_verified: false,
    },

    render: false,
    phone_render: false,
    email_render: false,
    phone_counter: 0,
    email_counter: 0,

    data: []
}

export {
    creator
}