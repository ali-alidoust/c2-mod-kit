function NativeGetter(offset, getter, length) {
    return function () {
        let base;
        if ('selfPointer' in this) {
            base = this.selfPointer;
        }
        else {
            base = ptr(0);
            console.warn('No selfPointer found!');
        }
        return getter(base.add(offset), length);
    };
}
exports.NativeGetter = NativeGetter;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIk5hdGl2ZUdldHRlckZ1bmMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBTUEsc0JBQTZCLE1BQWMsRUFBRSxNQUF3QixFQUFFLE1BQWM7SUFDakYsTUFBTSxDQUFDO1FBQ0gsSUFBSSxJQUFJLENBQUM7UUFFVCxFQUFFLENBQUMsQ0FBQyxhQUFhLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQztZQUN4QixJQUFJLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQztRQUM1QixDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDSixJQUFJLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2QsT0FBTyxDQUFDLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO1FBQzFDLENBQUM7UUFFRCxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDNUMsQ0FBQyxDQUFBO0FBQ0wsQ0FBQztBQWJlLG9CQUFZLGVBYTNCLENBQUEiLCJmaWxlIjoiTmF0aXZlR2V0dGVyRnVuYy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCJGcmlkYS50c1wiLz5cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgTmF0aXZlR2V0dGVyRnVuYyB7XHJcbiAgICAoYWRkcmVzczogTmF0aXZlUG9pbnRlciwgbGVuZ3RoOiBudW1iZXIpOiBhbnk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBOYXRpdmVHZXR0ZXIob2Zmc2V0OiBudW1iZXIsIGdldHRlcjogTmF0aXZlR2V0dGVyRnVuYywgbGVuZ3RoOiBudW1iZXIpIHtcclxuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgbGV0IGJhc2U7XHJcblxyXG4gICAgICAgIGlmICgnc2VsZlBvaW50ZXInIGluIHRoaXMpIHtcclxuICAgICAgICAgICAgYmFzZSA9IHRoaXMuc2VsZlBvaW50ZXI7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgYmFzZSA9IHB0cigwKTtcclxuICAgICAgICAgICAgY29uc29sZS53YXJuKCdObyBzZWxmUG9pbnRlciBmb3VuZCEnKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBnZXR0ZXIoYmFzZS5hZGQob2Zmc2V0KSwgbGVuZ3RoKTtcclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
