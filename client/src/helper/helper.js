import {toast} from "react-toastify";

class ValidationHelper {

    // Check if input contains only letters and common punctuation
    static IsLater(value) {
        let OnlyLaterRegx = /^[A-Za-z\'\s\.\,\-\!\@\#\$\%\^\&\*\(\)\[\]\{\}\:\;\"\<\>\?\/\+\=\_\\\|`\~]+$/;
        return OnlyLaterRegx.test(value);
    }

    // Validate email format
    static IsEmail(value) {
        let EmailRegx = /\S+@\S+\.\S+/;
        return EmailRegx.test(value);
    }

    // Validate Bangladeshi mobile number format
    static IsMobile(value) {
        let MobileRegx = /(^(\+88|0088)?(01){1}[3456789]{1}(\d){8})$/;
        return MobileRegx.test(value);
    }

    // Check if value is a valid number (integer or decimal)
    static IsNumber(value) {
        let OnlyNumberRegx = /^\d+(\.\d+)?$/;
        return OnlyNumberRegx.test(value);
    }

    // Check if value is null
    static IsNull(value) {
        return value == null;
    }

    // Check if value is an empty string or array
    static IsEmpty(value) {
        return value.length === 0;
    }
}

export default ValidationHelper;



export const successToast = (message) => {
    toast.success(message);
};

export const errorToast = (message) => {
    toast.error(message);
};