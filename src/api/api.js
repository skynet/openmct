define([
    './Type',
    './TimeConductor',
    './View',
    './objects/ObjectAPI',
    './composition/CompositionAPI',
    './types/TypeRegistry',
    './ui/Dialog',
    './ui/GestureAPI',
    './telemetry/TelemetryAPI'
], function (
    Type,
    TimeConductor,
    View,
    ObjectAPI,
    CompositionAPI,
    TypeRegistry,
    Dialog,
    GestureAPI,
    TelemetryAPI
) {
    return {
        Type: Type,
        View: View,
        TimeConductor: TimeConductor,
        ObjectAPI: ObjectAPI,
        CompositionAPI: CompositionAPI,
        Dialog: Dialog,
        TypeRegistry: TypeRegistry,
        GestureAPI: GestureAPI,
        TelemetryAPI: TelemetryAPI
    };
});
