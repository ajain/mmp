require 'test_helper'

class StaticPagesControllerTest < ActionController::TestCase
  test "should get initiative" do
    get :initiative
    assert_response :success
  end

end
