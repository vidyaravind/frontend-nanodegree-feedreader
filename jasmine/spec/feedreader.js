/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
 $(function () {
    /* This is our first test suite - a test suite just contains
     * a related set of tests. This suite is all about the RSS
     * feeds definitions, the allFeeds variable in our application.
     */
     describe('RSS Feeds', function () {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
         it('Should have allFeeds defined', function () {
            //expect url is defined and greater than 0
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* A test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
         it('Should have urls defined', function () {
            //loops through all feeds
            allFeeds.forEach(function (result) {
                //expect url is defined and not equal to null
                expect(result.url).toBeDefined();
                expect(result.url).not.toBe(null);
            });
        });


        /* A test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
         it('Should have name defined', function () {
            //loops through all feeds
            allFeeds.forEach(function (result) {
                //expect url is defined and not equal to null
                expect(result.name).toBeDefined();
                expect(result.name).not.toBe(null);
            });
        });
     });

     /* This is our second test suite - a test suite just contains
     * a related set of tests. This suite is all about the display of menu.
     */

     describe('The menu',function() {
        /*A test that ensures the menu element is
        * hidden by default. You'll have to analyze the HTML and
        * the CSS to determine how we're performing the
        * hiding/showing of the menu element.
        */
        it('Should not show menu and must be hidden on load', function () {
            var result = document.getElementsByTagName("body")[0].className;
            expect(result).toContain('menu-hidden');
        });

        /* A test that ensures the menu changes
         * visibility when the menu icon is clicked. This test
         * should have two expectations: does the menu display when
         * clicked and does it hide when clicked again.
         */
         it('Should display menu when clicked and hide when clicked again', function () {
            $('.menu-icon-link').click();
            var result = document.getElementsByTagName("body")[0].className;
            expect(result).not.toContain('menu-hidden');
            $('.menu-icon-link').click();
            var result = document.getElementsByTagName("body")[0].className;
            expect(result).toContain('menu-hidden');
        });
        /* A test that ensures the menu changes after clicking on menu
         * visibility when the menu icon is clicked. This test
         * should have two expectations: does the menu display when
         * clicked and does it hide when clicked on the list.
         */
         it('Should display menu when clicked and hide when clicked on the list', function () {
            //click on menu icon link
            $('.menu-icon-link').click();
            //set the result with class name
            var result = document.getElementsByTagName("body")[0].className;
            //expect if menu is not hidden
            expect(result).not.toContain('menu-hidden');
            //click on the menu display
            $("a[data-id='1']").click();
            //set the result with class name
            var result = document.getElementsByTagName("body")[0].className;
            //expect menu is hidden
            expect(result).toContain('menu-hidden');
        });
     });

     /* This is our second test suite - a test suite just contains
     * a related set of suite named "Initial Entries
     */
     describe('Initial Entries', function () {

        /* A test that ensures when the loadFeed
        * function is called and completes its work, there is at least
        * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test wil require
        * the use of Jasmine's beforeEach and asynchronous done() function.
        */
        beforeEach(function (done) {
            //load the initial feed
            loadFeed(0,function(){
                done();
            });
        });
        it('Should have atleast one feed  ',function(done){
            //validate result is greater than 0
            var result = $('.feed .entry-link');
            //expect result is greater than 0
            expect(result.length).not.toBe(0);
            done();
        });
    });

    /* This is third test suite - a test suite just contains
     * a related set of suite named "New Feed Selection"
     */
     describe('New Feed Selection',function() {
        /*A test that ensures when a new feed is loaded
        * by the loadFeed function that the content actually changes.
        * Remember, loadFeed() is asynchronous.
        */
        var firstContent, secondContent;
        beforeEach(function (done) {
            //load the initial feed
            loadFeed(0, function () {
                //set the value to the variable
                firstContent = $('.feed').html();
                //load the next content
                loadFeed(1, done);
            });
        });
        it('Should load different feed',function(done){
            //set the value to the variable
            secondContent = $('.feed').html();
            //expect first and second content are not same
            expect(secondContent).not.toBe(firstContent);
            done();
        });
    });
 }());
