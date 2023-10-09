//
//  loadGo.swift
//  App
//
//  Created by tv on 2023/10/06.
//

import Foundation
import Capacitor
import golib

let shortBufLen: Int = 256

/**
 * Please read the Capacitor iOS Plugin Development Guide
 * here: https://capacitorjs.com/docs/plugins/ios
 */
@objc(LibGoPlugin)
public class LibGoPlugin: CAPPlugin {
    @objc func GoodMorning(_ call: CAPPluginCall) {
        let buffer = UnsafeMutablePointer<Int8>.allocate(capacity: shortBufLen)
        buffer.initialize(to: 0)
        print("ff GoodMorning")
        golib.GoodMorning(buffer, Int32(shortBufLen))
        let p = String(cString: buffer)
        print("ff GoodMorning: \(p)")
        call.resolve(["answer": p])
    }
}

