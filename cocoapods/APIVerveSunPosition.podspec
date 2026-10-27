Pod::Spec.new do |s|
  s.name             = 'APIVerveSunPosition'
  s.version          = '1.2.3'
  s.summary          = 'Sun Position calculates the sun altitude and azimuth, plus compass bearing, for any geographic coordinates and time.'
  s.description      = <<-'DESC'
Sun Position calculates the sun altitude and azimuth, plus compass bearing, for any geographic coordinates and time. Provide latitude and longitude to read sun elevation angles and daylight status; paid plans add panel aiming angles and shadow ratios.

This iOS/macOS SDK provides a convenient way to access the Sun Position from APIVerve.
Supports both callback-based and async/await patterns.
                       DESC

  s.homepage         = 'https://apiverve.com/marketplace/sunposition?utm_source=cocoapods&utm_medium=referral&utm_content=homepage'
  s.license          = { :type => 'MIT', :file => 'LICENSE' }
  s.author           = { 'APIVerve' => 'hello@apiverve.com' }
  # The SDK repo holds every language; the pod lives under cocoapods/ with its own tag.
  s.source           = { :git => 'https://github.com/apiverve/sunposition-api.git', :tag => "cocoapods/v#{s.version}" }

  s.ios.deployment_target = '15.0'
  s.osx.deployment_target = '12.0'

  s.swift_version = '5.0'

  s.source_files = 'cocoapods/Sources/APIVerveSunPosition/**/*.swift'

  s.frameworks = 'Foundation'

  # APIResponse, APIVerveError and the request plumbing, shared by every APIVerve pod.
  s.dependency 'APIVerveCore', '~> 1.2'
end
