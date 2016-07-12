/**
 * ToastReactPackage.java
 * <p/>
 * Description:
 * <p/>
 * Created on 2016/7/12 下午8:37
 * <p/>
 * Author: caoli
 * <p/>
 * Copyright (c) 2016 CO.,LTD. All Rights Reserved.
 */
package com.smart.component.toast;

import com.facebook.react.ReactPackage;
import com.facebook.react.bridge.JavaScriptModule;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.uimanager.ViewManager;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class ToastReactPackage implements ReactPackage {
    @Override
    public List<Class<? extends JavaScriptModule>> createJSModules() {
        return Collections.emptyList();
    }

    @Override
    public List<ViewManager> createViewManagers(ReactApplicationContext reactContext) {
        return Collections.emptyList();
    }

    @Override
    public List<NativeModule> createNativeModules(
            ReactApplicationContext reactContext) {
        List<NativeModule> modules = new ArrayList<NativeModule>();

        modules.add(new ToastModule(reactContext));

        return modules;
    }
}