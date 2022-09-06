import { ConsumablePF2e } from "@item";

ConsumablePF2e.isAmmoFor = function(item : ItemPF2e): boolean{
    // if (!(item instanceof WeaponPF2e || item.traits.has("powered"))) {
    //     console.warn("cannot load a consumable into a non-powered or non-weapon item")
    //     return false
    // }

    if(this.traits.has("hb_power-source") && item.traits.has("hb_powered")) {
        return true
    }

    const { max } = this.uses;
    return ((item.traits.has("repeating")) ? max > 1 : max <= 1);
}