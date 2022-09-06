import { ConsumablePF2e } from "@item";

ConsumablePF2e.isAmmoFor = function(item){
    if(this.traits.has("hb_power-source") && item.traits.has("hb_powered")) {
        return true
    } else {
        const { max } = this.uses;
        return ((item.traits.has("repeating")) ? max > 1 : max <= 1);
    }
}