use std::ffi::c_float;
use wasm_bindgen::prelude::*;

#[wasm_bindgen]
extern {
    pub fn alert(s: &str);
}

#[wasm_bindgen]
pub fn greet(name: &str) {
    alert(&format!("Hello, {}!", name))
}

#[wasm_bindgen]
pub fn calc(a: c_float, b: c_float) -> c_float {
    return  a + b
}
