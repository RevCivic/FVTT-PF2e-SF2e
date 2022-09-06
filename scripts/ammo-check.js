import { ConsumablePF2e } from "@item";

ConsumablePF2e.prototype.isAmmoFor = function(item : ItemPF2e){
    // if (!(item instanceof WeaponPF2e || item.traits.has("powered"))) {
    //     console.warn("cannot load a consumable into a non-powered or non-weapon item")
    //     return false
    // }

    const { max } = this.uses;
    return ((item.traits.has("repeating" || "hb_powered")) ? max > 1 : max <= 1;
}