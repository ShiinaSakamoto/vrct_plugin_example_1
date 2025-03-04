import React from "react";

export const init = (plugin_context) => {
    const { useHook: useStore_CountPluginState } = plugin_context.createAtomWithHook({ count: 6 }, "CountPluginState");

    // プラグインの UI コンポーネント
    const PluginComponent = () => {
        const { updateCountPluginState, currentCountPluginState } = useStore_CountPluginState();
        const incrementCount = () => {
            updateCountPluginState((prev_value) => {
                return { count: prev_value.data.count + 1 }
            });
        };

        return (
            <div>
                <p>Plugin Count: {currentCountPluginState?.data?.count}</p>
                <button onClick={incrementCount}>
                    Increment Plugin Count
                </button>
            </div>
        );
    };

    // UI の"main_section"拡張ポイントにコンポーネントを登録
    plugin_context.registerComponent({
        plugin_id: "vrct_plugin_example_1",
        location: "main_section",
        component: PluginComponent
    });
};