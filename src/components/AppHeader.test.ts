import { shallowMount } from "@vue/test-utils";
import AppHeader from "./AppHeader.vue";

describe("AppHeader", () => {
  it("renders a header", () => {
    const wrapper = shallowMount(AppHeader);
    expect(wrapper.find("header").exists()).toBe(true);
  });

  describe("AppHeader Hamburguer", () => {
    it("renders a button", () => {
      const wrapper = shallowMount(AppHeader);
      expect(wrapper.find("[data-test='menu-button']").exists()).toBe(true);
    });

    it("displays mobile menu when clicked", async () => {
      const wrapper = shallowMount(AppHeader);
      await wrapper.find("[data-test='menu-button']").trigger("click");
      expect(wrapper.find("[data-test='mobile-menu']").exists()).toBe(true);
    });

    it("hides mobile menu when clicked again", async () => {
      const wrapper = shallowMount(AppHeader);
      await wrapper.find("[data-test='menu-button']").trigger("click");
      await wrapper.find("[data-test='menu-button']").trigger("click");
      expect(wrapper.find("[data-test='mobile-menu']").exists()).toBe(false);
    });
  });
});
